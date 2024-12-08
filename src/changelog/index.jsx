import HighlightPreviewWidget from "../components/atoms/Highlight.Preview";
import Typography from "../components/atoms/Typography";
import TypographyPreviewWidget from "../components/atoms/Typography.preview";
import Top10Javascript from "../examples/Top10Javascript";

const ChangeLog = () => {
  const changeLogEntries = [
    {
      date: "08 Dec, 2024",
      title: "Typography Preview Enhancement",
      description:
        "Improved Typography component with better support for different text variants.",
      components: [
        {
          key: "typography-preview-widget",
          component: <TypographyPreviewWidget />,
        },
      ],
    },
    {
      date: "08 Dec, 2024",
      title: "Highlight Widget Addition",
      description:
        "Introduced HighlightPreviewWidget for better text highlighting in the blog posts.",
      components: [
        {
          key: "highlight-preview-widget",
          component: <HighlightPreviewWidget />,
        },
      ],
    },
    {
      date: "08 Dec, 2024", // Today's date
      title: "Top10Javascript Example",
      description:
        "This is the most recent change made to the application today.",
      components: [
        {
          key: "today-update-text",
          component: (
            <Typography variant="body1" className="text-gray-700">
              This is a special update for today. Today, we added dynamic date
              support.
            </Typography>
          ),
        },
        {
          key: "today-update-widget",
          component: <Top10Javascript />,
        },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      {/* Change Log Title */}
      <Typography
        variant="h4"
        className="text-center mb-6 font-bold text-gray-800"
      >
        Change Log
      </Typography>

      {/* Change Log Entries */}
      {changeLogEntries.map((entry, index) => (
        <div key={index} className="mb-12 pb-6">
          {/* Date and Title */}
          <Typography variant="h6" className="text-blue-800 font-semibold">
            {entry.date} - {entry.title}
          </Typography>

          {/* Description */}
          <Typography variant="body1" className="text-gray-700 mb-4">
            {entry.description}
          </Typography>

          {/* Components Section */}
          {entry.components.map((item) => (
            <div key={item.key} className="mb-6">
              {item.component}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ChangeLog;
