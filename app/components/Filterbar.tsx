interface Filterbarprops {
  selectedType: string;
  setSelectedType: (value: string) => void;
  selectedLesson: string;
  setSelectedLesson: (value: string) => void;
  isPinyinVisible: boolean;
  setIsPinyinVisible: (value: boolean) => void;
  options: string[];
}

export default function Filterbar({
  selectedType,
  setSelectedType,
  selectedLesson,
  setSelectedLesson,
  isPinyinVisible,
  setIsPinyinVisible,
  options,
}: Filterbarprops) {
  return (
    <div>
      <div className='px-10 flex flex-col justify-center md:flex-row md:items-center md:w-full md:mx-auto md:p-6'>
        <label className='mb-2 mr-2 flex flex-row items-center text-sm md:mb-0 md:text-base'>
          Select type:
          <select
            className='cursor-pointer p-2 rounded border border-solid border-gray-400 ml-2'
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}>
            <option value='Minna No Nihongo Lesson'>Minna No Nihongo Lesson</option>
            <option value='Topic'>Topic</option>
          </select>
        </label>
        <label className='mb-2 mr-2 flex flex-row items-center text-sm md:mb-0 md:text-base'>
          {selectedType === 'Minna No Nihongo Lesson' ? 'Select lesson: ' : 'Select topic: '}
          <select
            className='cursor-pointer p-2 rounded border border-solid border-gray-400 ml-2'
            value={selectedLesson}
            onChange={(e) => setSelectedLesson(e.target.value)}>
            <option value='All'>All</option>
            {options.map((item: string) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </label>
        <button
          className='bg-[#CD9FCC] hover:bg-[#BC7DBA] rounded p-2 w-24 md:w-36 text-sm md:text-base'
          onClick={() => setIsPinyinVisible(!isPinyinVisible)}>
          {isPinyinVisible ? 'Hide' : 'Show'} Kanji
        </button>
      </div>
    </div>
  );
}
