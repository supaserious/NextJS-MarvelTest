import React from 'react';

import { withRouter } from 'next/router';
import { getSinglePost } from '../../src/api/apiCalls';
import PostItem from '../../src/components/Post';

const PostPage = ({ posts, query }) => {
  console.log(posts);


  return (
    <>
      <h1>{`Post #${query.id}`}</h1>
      <PostItem post={posts}></PostItem>
    </>
  );
};

PostPage.getInitialProps = async ({ query }) => {
  const response = await getSinglePost(query.id);
  const posts = await response.json();

  return { posts, query };
};
export default withRouter(PostPage);
