import logo from 'assets/logo.svg';

interface LogoProp {
  title: string;
}

export default function Logo(props: LogoProp) {
  const { title } = props;
  return <img src={logo} alt={title} width='100' />;
}
