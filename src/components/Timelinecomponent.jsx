import * as React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'; 
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
        flexDirection: { xs: 'column', sm: 'row' }, 
        [`& .MuiTimelineItem-root`]: {
          display: 'flex',
          justifyContent: 'flex-start', 
          textAlign: 'left', 
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
              alignItems: 'flex-start',
              marginLeft: '8px', 
            }}
          >
            {/* Event label and time stacked */}
            <Typography
              variant="h6"
              component="span"
              sx={{
                fontWeight: "bold",
                fontFamily: "Sora",
                fontSize: { xs: '0.875rem', sm: '1rem' },
              }}
            >
              {event.label}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{
                fontFamily: "Sora",
                fontSize: { xs: '0.75rem', sm: '0.875rem' }, 
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
