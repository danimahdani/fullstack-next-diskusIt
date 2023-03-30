"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthPosts } from "../types/authPosts";
import EditPost from "./EditPost";

const fetchAuthPosts = async () => {
  const response = await axios.get("/api/posts/authPosts");
  return response.data;
};

export default function MyPosts() {
  const { data, isLoading } = useQuery<AuthPosts>({
    queryFn: fetchAuthPosts,
    queryKey: ["auth-posts"],
  });

  if (isLoading) return <h1>Posts are loading...</h1>;
  console.log(data);

  return (
    <div>
      {data?.posts.map((post) => (
        <EditPost
          avatar={data.image}
          key={post.id}
          id={post.id}
          name={data.name}
          title={post.title}
          comments={post.comments}
        />
      ))}
    </div>
  );
}
