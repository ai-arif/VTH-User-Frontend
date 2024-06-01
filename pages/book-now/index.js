import BookNow from "@/components/BookNow";
import withAuth from "@/utils/withAuth";
import React from "react";

const BookNowWithAuth = withAuth(BookNow);

function index() {
  return <BookNowWithAuth />;
}

export default index;
