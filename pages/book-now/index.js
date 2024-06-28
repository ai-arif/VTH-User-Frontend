import BookNow from "@/components/BookNow";
import WithoutFooter from "@/components/Layout/WithoutFooter";
import withAuth from "@/utils/withAuth";
import React from "react";

const BookNowWithAuth = withAuth(BookNow);

function index() {
  return (
    <WithoutFooter>
      <BookNowWithAuth />
    </WithoutFooter>
  );
}

export default index;
