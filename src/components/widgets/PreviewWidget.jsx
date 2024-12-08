import { useState } from 'react';
import PropTypes from 'prop-types';
import { Eye, Code, Copy, Check } from 'lucide-react'; // Added Check icon

// Clipboard Copy Function
const copyToClipboard = (text, setIsCopied) => {
  navigator.clipboard.writeText(text);
  setIsCopied(true);
  setTimeout(() => setIsCopied(false), 1000); // Reset to copy icon after 1 second
};

// Function to generate code dynamically from component props with multi-line formatting
const generateCode = (Component, props) => {
  const componentName = Component.displayName || Component.name || 'Component';

  // Helper function to handle nested props and format the code with indentation
  const serializeProps = (props, level = 1) => {
    const indent = '  '.repeat(level); // Create indentation based on nesting level

    return Object.entries(props)
      .map(([key, value]) => {
        // If value is an object, handle it (arrays or nested objects)
        if (typeof value === 'object' && value !== null) {
          if (Array.isArray(value)) {
            // Format arrays
            return `${indent}${key}={[\n${value
              .map((item) => serializeProps({ item }, level + 1)) // Serialize each item in the array
              .join(',\n')}\n${indent}]}`;
          } else {
            // Format nested objects recursively
            return `${indent}${key}={\n${serializeProps(value, level + 1)}\n${indent}}`;
          }
        } else {
          // Handle primitive types (strings, numbers, booleans)
          return `${indent}${key}="${value}"`;
        }
      })
      .join('\n');
  };

  // Format the props as a multi-line string with indentation
  const propsString = serializeProps(props);

  return `<${componentName}\n${propsString}
>${props.children ? `\n  ${props.children}\n` : ''}</${componentName}>`;
};


// PreviewWidget Component
const PreviewWidget = ({ component: ComponentToPreview, variants }) => {
  const [activeView, setActiveView] = useState(
    Object.keys(variants).reduce((acc, variantKey) => {
      acc[variantKey] = 'preview'; // Set 'preview' as default for all variants
      return acc;
    }, {})
  );
  const [isCopied, setIsCopied] = useState({}); // Track copy status per variant

  return (
    <div className="space-y-8">
      {Object.keys(variants).map((variantKey) => {
        const props = variants[variantKey];

        // Dynamically generate the code using displayName or name
        const code = generateCode(ComponentToPreview, props);

        return (
          <div
            key={variantKey}
            className="border border-gray-200 rounded-lg shadow-sm bg-white p-4"
          >
            {/* Header with Icons */}
            <div className="flex items-center justify-between mb-4">
              <div className="font-semibold text-gray-800">{variantKey}</div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveView((prev) => ({ ...prev, [variantKey]: 'preview' }))}
                  className={`p-2 rounded-md border ${
                    activeView[variantKey] === 'preview'
                      ? 'bg-gray-100 border-gray-300'
                      : 'border-gray-200'
                  }`}
                  aria-label="Preview"
                >
                  <Eye className="w-4 h-4 text-gray-700" />
                </button>
                <button
                  onClick={() => setActiveView((prev) => ({ ...prev, [variantKey]: 'code' }))}
                  className={`p-2 rounded-md border ${
                    activeView[variantKey] === 'code'
                      ? 'bg-gray-100 border-gray-300'
                      : 'border-gray-200'
                  }`}
                  aria-label="Code"
                >
                  <Code className="w-4 h-4 text-gray-700" />
                </button>
                <button
                  onClick={() => copyToClipboard(code, () => setIsCopied((prev) => ({ ...prev, [variantKey]: true })))}
                  className="p-2 rounded-md border border-gray-200"
                  aria-label="Copy Code"
                >
                  {isCopied[variantKey] ? (
                    <Check className="w-4 h-4 text-gray-700" /> // Using Check icon with same color as Copy icon
                  ) : (
                    <Copy className="w-4 h-4 text-gray-700" />
                  )}
                </button>
              </div>
            </div>

            {/* Content: Preview or Code */}
            <div>
              {activeView[variantKey] === 'preview' ? (
                <ComponentToPreview {...props} />
              ) : (
                <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-auto">
                  <code>{code}</code>
                </pre>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

// PropTypes
PreviewWidget.propTypes = {
  component: PropTypes.elementType.isRequired, // Component to preview
  variants: PropTypes.objectOf(PropTypes.object).isRequired, // Variants to showcase
};

export default PreviewWidget;
