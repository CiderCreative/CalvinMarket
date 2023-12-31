import React from 'react'

const SentMessage = ({text}) => {
  return (
    <div className="flex justify-end">
      <div className="px-3 py-5 bg-neutral-300 dark:bg-neutral-800 text-primary rounded-xl rounded-br-none xl:max-w-[800px]">
        {text}
      </div>
    </div>
  )
}

export default SentMessage