import PreviewWidget from '../widgets/PreviewWidget';
import Typography from './Typography';

const typographyVariants = {
  Title: { variant: 'title', children: 'This is a Title' },
  Subtitle: { variant: 'subtitle', children: 'This is a Subtitle' },
  Body: { variant: 'body', children: 'This is a Body text' },
  Small: { variant: 'small', children: 'This is small text' },
  Code: { variant: 'code', children: 'const x = 10;' },
  Blockquote: { variant: 'blockquote', children: 'This is a blockquote' },
  Highlighted: { variant: 'highlighted', children: 'This is highlighted text' },
  Chip: { variant: 'chip', children: 'Tag' },
};

const TypographyPreviewWidget = () => (
  <div className="max-w-4xl mx-auto py-10">
    <PreviewWidget component={Typography} variants={typographyVariants} />
  </div>
);

export default TypographyPreviewWidget;
