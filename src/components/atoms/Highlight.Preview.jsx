import PreviewWidget from '../widgets/PreviewWidget'; // Assuming PreviewWidget is in the correct path
import Highlight from './Highlight'; // Assuming Highlight component is used

// Example highlight variants with meaningful titles
const highlightVariants = {
  TitleWithHighlight: {
    text: 'This is a title with highlight',
    highlightInstructions: [
      { text: 'title', style: { highlight: true, bold: true } },
      { text: 'highlight', style: { italic: true, underline: true } },
    ],
  },
  BodyWithInlineStyles: {
    text: 'This is a body text with inline styles',
    highlightInstructions: [
      { text: 'body', style: { highlight: true } },
      { text: 'styles', style: { bold: true, italic: true } },
    ],
  },
  JavaScriptCodeWithHighlights: {
    text: 'JavaScript code with highlights',
    highlightInstructions: [
      { text: 'JavaScript', style: { underline: true } },
      { text: 'highlights', style: { strikeThrough: true } },
    ],
  },
  ReactComponentWithCustomHighlights: {
    text: 'React component with custom highlights',
    highlightInstructions: [
      { text: 'React', style: { highlight: true, bold: true } },
      { text: 'custom', style: { italic: true } },
    ],
  },
};

const HighlightPreviewWidget = () => (
  <div className="max-w-4xl mx-auto py-10">
    <PreviewWidget component={Highlight} variants={highlightVariants} />
  </div>
);

export default HighlightPreviewWidget;
