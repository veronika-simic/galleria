export default function SingleImage(props: { data: string }) {
  return <img src={props.data} alt="image" loading="lazy" />;
}
