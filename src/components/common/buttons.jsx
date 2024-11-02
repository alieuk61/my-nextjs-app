import Image from "next/image"

export const AddTaskButton = () => {

    return(
        <button className="rounded-3xl w-40 h-12 flex justify-center items-center bg-mainPurple text-white ">
            <Image 
                src='/assets/icon-add-task-mobile.svg'
                height={10}
                width={10}
            />
            <h3>Add New Task</h3>
        </button>
    )
}