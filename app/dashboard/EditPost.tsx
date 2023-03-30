"use client";

import Image from "next/image";
import { useState } from "react";

type EditProps = {
  id: string;
  avatar: string;
  name: string;
  title: string;
  comments?: {
    createdAt: string;
    id: string;
    postId: string;
    title: string;
    userId: string;
  }[];
};

export default function EditPost({
  avatar,
  name,
  title,
  comments,
  id,
}: EditProps) {
  return (
    <div className="bg-white my-8 p-8 rounded-lg">
      <Image src={avatar} alt="Avatar Image" width={32} height={32} />
      <h3 className="font-bold text-gray-300">{name}</h3>
    </div>
  );
}
