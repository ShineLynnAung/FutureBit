import img from "./scratch.png";
export default function scratch({ className = "w-6 h-6 text-red-500" }) {
  return (

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 200 200"
  className="w-8 h-8 rounded-full"
>
  <image xlinkHref={img} width="200" height="200" />
</svg>
  );
}
