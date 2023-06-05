import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import Button from "./Button";
import ProfileImage from "./ProfileImage";
import { useSession } from "next-auth/react";

const updateTextAreaSize = (textArea?: HTMLTextAreaElement) => {
  if (textArea == null) return;
  textArea.style.height = "0";
  textArea.style.height = `${textArea.scrollHeight}px`;
};

const Form = () => {
  const session = useSession();
  const [inputValue, setInputValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>();
  const inputRef = useCallback((textArea: HTMLTextAreaElement) => {
    updateTextAreaSize(textArea);
    textAreaRef.current = textArea;
  }, []);

  useLayoutEffect(() => {
    updateTextAreaSize(textAreaRef.current);
  }, [inputValue]);
  if (session.status !== "authenticated") return null;
  return (
    <form action="" className="flex flex-col gap-2 px-4">
      <div className="flex gap-4">
        <ProfileImage src={session.data.user.image} />
        <textarea
          style={{ height: 0 }}
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-grow resize-none overflow-hidden p-4 text-lg outline-none"
          placeholder="What is happening?"
        />
      </div>
      <Button className="self-end">Tweet</Button>
    </form>
  );
};

const NewTweetForm = () => {
  const session = useSession();
  if (session.status !== "authenticated") return;
  return <Form />;
};

export default NewTweetForm;
