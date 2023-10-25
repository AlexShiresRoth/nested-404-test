import { notFound } from "next/navigation";

const shouldbeHidden = true;

const page = () => {
  // this page should throw 404
  if (shouldbeHidden) {
    notFound();
  }

  return <div>page</div>;
};

export default page;
