import React from 'react'

function Card({capsule, index, click}) {
  return (
    <article key={index} className="articles p-5">
                    <h2 className="text-white font-bold text-xl">
                     Type: {capsule.type},{" "}
                      <span className="opacity-75 text-lg font-normal">
                        {capsule.capsule_serial}
                      </span>
                    </h2>
                    <ul className="text-sm opacity-75 text-white mt-3">
                      <li>Reused {capsule.reuse_count} times</li>
                      <li>{capsule.capsule_id} capsule_id</li>
                      <li>{capsule.landings} landings</li>
                      <li>{capsule.original_launch} land landings</li>
                      <li
                        className={`capitalize ${
                          capsule.status === "active"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        Status: {capsule.status}
                      </li>
                    </ul>
                    <p className="text-white text-sm opacity-75 mt-3">
                      {capsule.details}
                      {capsule.missions['name']}
                      {capsule.missions['flight']}
                    </p>
                    <button className="btn" onClick={()=>click(capsule.details, capsule.capsule_id, capsule.capsule_serial)}>open {capsule.capsule_id}</button>

                  </article>
  )
}

export default Card