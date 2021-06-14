import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

function BasicTimeline(props) {
  const data = props.data;

  return (
    <Timeline>
      {data.map((item, index) => (
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            {data.length > index + 1 && (
              <TimelineConnector />
            )}
          </TimelineSeparator>
          <TimelineContent>{item.name}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}

export default BasicTimeline;