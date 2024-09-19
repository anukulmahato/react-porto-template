import { Link } from 'react-router-dom';
import { Accordion, Avatar, Stack } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import "./FaqAccordion.css";


const Header = props => {
  const { avatarUrl, title, ...rest } = props;
  return (
    <Stack {...rest} spacing={10} alignItems="flex-start">
      <Avatar src={avatarUrl} alt={title} />
      <Stack spacing={2} direction="column" alignItems="flex-start">
        <div>{title}</div>
      </Stack>
    </Stack>
  );
};

const FaqAccordion = () => {
  return (
    <>
      <Accordion bordered defaultActiveKey={1}>
        <Accordion.Panel
          header={
            <Header
              avatarUrl="https://avatars.githubusercontent.com/u/6412038"
              title="React Websites"
            />
          }
          eventKey={1}
        >
          React is a JavaScript library for building user interfaces.
          
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blanorem ipsum dolor sit amet, consecte.
          Adipiscing elit phasellus blanit ma…
          <br/><br/>
          <Link to="#">Read more {">"}</Link>
        </Accordion.Panel>
        <Accordion.Panel
          header={
            <Header
              avatarUrl="https://avatars.githubusercontent.com/u/6128107"
              title="Vue"
            />
          }
          eventKey={2}
        >
          Donec tellus massa, tristique sit amet condimentum vel, facilisis quis sapien.
        </Accordion.Panel>
        <Accordion.Panel
          header={
            <Header
              avatarUrl="https://avatars.githubusercontent.com/u/139426"
              title="Angular "
            />
          }
          eventKey={3}
        >
          Donec tellus massa, tristique sit amet condimentum vel, facilisis quis sapien.
        </Accordion.Panel>
      </Accordion>
    </>
  )
}

export default FaqAccordion