interface Props {
  title: string;
}

export const Heading: React.FC<Props> = ({ title }) => {
  return <h1 className="text-3xl font-bold underline">{title}</h1>;
};
