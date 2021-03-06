import React from "react";
import Layout from "../components/Layout";
import Post from "../components/Post";
import { getAllPostsData } from "../lib/posts";

export default function Blog({ posts }) {
  return (
    <Layout title="Blog">
      <ul className="m-10">
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  //ビルド時にサーバーサイドで１回だけ実行される
  const posts = await getAllPostsData(); //APIからデータを取得
  return { props: { posts } };
}
