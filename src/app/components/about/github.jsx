import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const Github = () => {
  return (
    <div className="flex flex-col items-center pb-10 w-full">
      <h1 className="text-center text-3xl font-bold mb-5">
        Days I <span className="text-blue-600">Code</span>
      </h1>
      <div className="flex w-full justify-center max-w-full overflow-hidden ">
        <div className="transform scale-90 sm:scale-75 md:scale-100 p-[10px] rounded-[10px] bg-[#000]">
          <GitHubCalendar
            username="nihat417"
            blockSize={15}
            blockMargin={5}
            color="#c084f5"
            style={{color:'blue'}}
            fontSize={16}
          />
        </div>
      </div>
    </div>
  );
};

export default Github;

