import { notFound } from "next/navigation";

const shouldbeHidden = process.env.NEXT_PUBLIC_HIDE_PAGE;

const page = () => {
  // this page should throw 404
  if (!!shouldbeHidden) {
    notFound();
  }

  return <div>page</div>;
};

export default page;
