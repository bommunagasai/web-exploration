import PropTypes from 'prop-types';
import clsx from 'clsx';

const Typography = ({
  as: Tag = 'p',
  variant,
  weight,
  color,
  style,
  children,
  className,
}) => {
  // Variants (size and base styles)
  const variants = {
    title: 'text-4xl font-bold',
    subtitle: 'text-2xl font-semibold',
    body: 'text-base',
    small: 'text-sm',
    code: 'font-mono text-sm bg-gray-100 p-1 rounded',
    blockquote: 'italic border-l-4 border-gray-300 pl-4 text-gray-600',
    highlighted: 'bg-yellow-100 text-yellow-800 px-2 py-1 rounded',
    chip: 'inline-block text-sm px-3 py-1 bg-blue-100 text-blue-800 rounded-full',
  };

  // Font weights
  const weights = {
    normal: 'font-normal',
    medium: 'font-medium',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
  };

  // Styles
  const styles = {
    underline: 'underline',
    strikethrough: 'line-through',
    italic: 'italic',
  };

  return (
    <Tag
      className={clsx(
        variants[variant],
        weights[weight],
        color,
        style.split(' ').map((s) => styles[s]),
        className
      )}
    >
      {children}
    </Tag>
  );
};

// Default Props
Typography.defaultProps = {
  as: 'p',
  variant: 'body',
  weight: 'normal',
  color: 'text-gray-800',
  style: '',
  className: '',
};

// Prop Types
Typography.propTypes = {
  as: PropTypes.string, // HTML tag to render (e.g., 'p', 'h1', 'span')
  variant: PropTypes.oneOf([
    'title',
    'subtitle',
    'body',
    'small',
    'code',
    'blockquote',
    'highlighted',
    'chip',
  ]), // Variant of typography
  weight: PropTypes.oneOf(['normal', 'medium', 'bold', 'extrabold']), // Font weight
  color: PropTypes.string, // Tailwind text color class (e.g., 'text-red-500')
  style: PropTypes.string, // Text styles (e.g., 'underline italic')
  children: PropTypes.node.isRequired, // Text or elements inside the component
  className: PropTypes.string, // Custom class for additional styling
};

export default Typography;
