import Image from "next/image";
import { AddTaskButton } from "./common/buttons";

export default function BoardHeader() {
  return (
    <div className='w-full h-24 px-8 bg-white dark:bg-darkGrey border-b-2 border-linesLight dark:border-linesDark flex justify-between items-center'>
      <h2>{/*board name*/}</h2>
      {/* add new task button */}

      <div className="flex">
        <AddTaskButton />
        <Image
          src='/assets/icon-vertical-ellipsis.svg'
          alt='vertical ellipsis'
          width={10}
          height={10}
        />
      </div>
    </div>
  );
}
