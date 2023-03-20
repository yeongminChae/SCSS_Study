import "./App.css";

export function cls(...classname: string[]) {
  return classname.join(" ");
}

export default function App() {
  return <div className="text-red-200">ddd</div>;
}
