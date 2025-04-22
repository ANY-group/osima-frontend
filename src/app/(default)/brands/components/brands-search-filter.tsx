'use client';

import Link from "next/link";

export default function BrandsSearchFilter() {
  const filters = [...'abcdefghijklmnopqrstuvwxyz'.split(''), '0-9', 'а-я'];

  return (
    <div className="pb-1">
      <div className="flex items-center justify-between gap-5 border px-5 py-3 rounded-xl border-divider text-sm font-bold overflow-x-auto no-scrollbar">
        {filters.map((filter, index) => (
          <Link
            key={index}
            href={`#brands-group-${index}`}
            onClick={() => { }}
            className="whitespace-nowrap uppercase"
          >
            {filter}
          </Link>
        ))}
      </div>
    </div>
  );
}