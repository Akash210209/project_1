import * as React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Green tick icon
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'; // Grey circle
import { Typography } from '@mui/material';

export default function CustomTimeline() {
  const events = [
    { label: 'Bidding starts', time: '12 Dec 2023', completed: true },
    { label: 'Bidding ends', time: '15 Dec 2023', completed: true },
    { label: 'Allotment finalisation', time: '18 Dec 2023', completed: true },
    { label: 'Refund initiation', time: '18 Dec 2023', completed: false },
    { label: 'Demat transfer', time: '18 Dec 2023', completed: false },
    { label: 'Listing date', time: '12 Dec 2023', completed: false },
  ];

  return (
    <Timeline
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' }, // Stack items in column on xs screens
        [`& .MuiTimelineItem-root`]: {
          display: 'flex',
          justifyContent: 'flex-start', // Always left-align the timeline content
          textAlign: 'left', // Align text to the left on all screen sizes
        },
      }}
    >
      {events.map((event, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot color={event.completed ? "success" : "grey"}>
              {event.completed ? (
                <CheckCircleIcon style={{ color: 'white' }} />
              ) : (
                <RadioButtonUncheckedIcon style={{ color: 'grey' }} />
              )}
            </TimelineDot>
            {index < events.length - 1 && <TimelineConnector />}
          </TimelineSeparator>

          <TimelineContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start', // Always align content to the left
              marginLeft: '8px', // Add margin to separate the icon and content
            }}
          >
            {/* Event label and time stacked */}
            <Typography
              variant="h6"
              component="span"
              sx={{
                fontWeight: "bold",
                fontFamily: "Sora",
                fontSize: { xs: '0.875rem', sm: '1rem' }, // Responsive font size
              }}
            >
              {event.label}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{
                fontFamily: "Sora",
                fontSize: { xs: '0.75rem', sm: '0.875rem' }, // Responsive font size
              }}
            >
              {event.time}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
