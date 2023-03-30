"use client";
import Image from "next/image";
import Link from "next/link";

export default function Post({ avatar, name, postTitle, id, comments }: any) {
  // console.log(comments);

  return (
    <div className="bg-white my-8 p-8 rounded-lg">
      <div className="flex items-center gap-2">
        <Image
          alt="Avatar Profile"
          className="rounded-full"
          width={32}
          height={32}
          src={avatar}
        />
        <h3 className="font-bold text-gray-700">{name}</h3>
      </div>
      <div className="my-8">
        <div className="break-all">{postTitle}</div>
      </div>
      <div className="flex gap-8 cursor-pointer items-center">
        <Link href={`/post/${id}`}>
          <p className="text-sm font-bold text-gray-700">
            {comments?.length} Comments
          </p>
        </Link>
      </div>
    </div>
  );
}
