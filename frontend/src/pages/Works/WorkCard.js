import Card from '../../shared/components/UIElements/Card';

const files = [
  {
    title: 'Short Story',
    description: 'short story',
    key: 0,
  },
  {
    title: 'Script',
    description: 'script',
    key: 1,
  },
  {
    title: 'Story Board',
    description: 'story board',
    key: 2,
  },
  {
    title: 'Critic',
    description: 'critic',
    key: 3,
  },
];

const WorkCard = () => {
  const workFiles = files.map((file) => {
    return (
        <Card key={file.key} className="mapped">
          <h2>{file.title}</h2>
          <h4>{file.description}</h4>
        </Card>
    );
  });

  return workFiles;
};

export default WorkCard;
