const Icons = {
  chevronLeft: (color, fillColor) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fillColor}
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-chevron-left"
    >
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  ),
  add: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-plus-square"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="12" y1="8" x2="12" y2="16"></line>
      <line x1="8" y1="12" x2="16" y2="12"></line>
    </svg>
  ),
  edit: (color, fillColor) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fillColor}
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-edit"
    >
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
  ),
  delete: (color, fillColor) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fillColor}
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-trash-2"
    >
      <polyline points="3 6 5 6 21 6"></polyline>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
      <line x1="10" y1="11" x2="10" y2="17"></line>
      <line x1="14" y1="11" x2="14" y2="17"></line>
    </svg>
  ),
  navHeart: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-heart"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  ),
  heart: (color, fillColor) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill={fillColor}
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-heart"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  ),
  random: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-shuffle"
    >
      <polyline points="16 3 21 3 21 8"></polyline>
      <line x1="4" y1="20" x2="21" y2="3"></line>
      <polyline points="21 16 21 21 16 21"></polyline>
      <line x1="15" y1="15" x2="21" y2="21"></line>
      <line x1="4" y1="4" x2="9" y2="9"></line>
    </svg>
  ),
  home: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-home"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
  ),
  search: (color, fillColor) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fillColor}
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-search"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  ),
  ballSports: (fillColor) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="40px"
      viewBox="0 -960 960 960"
      width="40px"
      fill={fillColor}
    >
      <path d="m410.67-154 14.66-57.33q4.34-13.67 13.5-23.17Q448-244 462-245.33l130-10q14.33-1.34 25.67 5.66Q629-242.67 634-230l14 38.67q41-25 73.67-58.17 32.66-33.17 53.66-75.17L764.67-332q-12.34-8-17.34-19.83-5-11.84-2.66-24.84L774-505.33q2.33-13.34 12.5-21 10.17-7.67 22.83-9-5-25.67-13.16-50.84Q788-611.33 775.33-636q-8.33 5.67-18.5 5.5-10.16-.17-19.5-6.83l-110-65.34q-11-7-16-19.33-5-12.33-2.66-26l8.66-35.33Q585-798.67 550.5-806q-34.5-7.33-70.5-7.33-15.33 0-30.33.83-15 .83-30.34 3.17L452-738.67q5.67 12.67 2.17 26.34-3.5 13.66-14.84 23l-97.33 86q-11.33 7.66-25.17 9-13.83 1.33-26.16-6.34l-94-56q-25 40-37.5 84.84-12.5 44.83-12.5 91.83 0 17.33 4 53.33l92-8.66q14-2 26.16 5.16Q281-423 286.67-409.33l48 120q5.66 12.66 3.16 25-2.5 12.33-13.16 21.66l-38 34.67q27.66 20 58.83 33.33 31.17 13.34 65.17 20.67Zm76.66-179.33Q473-332 461.67-339q-11.34-7-17-19.67l-58-130q-5-12.66-.84-25.66 4.17-13 15.5-21l106-92Q517-637 530.67-637q13.66 0 26 7l116 69.33q11.66 7 17 19.34 5.33 12.33 2.33 26l-30.67 136.66q-3.66 12.34-13.66 21.17-10 8.83-21.67 10.17l-138.67 14ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
    </svg>
  ),
  cycling: (fillColor) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="40px"
      viewBox="0 -960 960 960"
      width="40px"
      fill={fillColor}
    >
      <path d="M196.63-80Q115-80 57.5-137.54 0-195.07 0-276.7t57.54-139.13q57.53-57.5 139.16-57.5t139.13 57.53q57.5 57.54 57.5 139.17T335.8-137.5Q278.26-80 196.63-80Zm.04-66.67q54.66 0 92.33-37.66 37.67-37.67 37.67-92.34 0-54.66-37.67-92.33t-92.33-37.67q-54.67 0-92.34 37.67-37.66 37.67-37.66 92.33 0 54.67 37.66 92.34 37.67 37.66 92.34 37.66Zm250-57.33v-200L314-520.67q-11.33-9.66-16.67-23.05-5.33-13.39-5.33-28.17 0-14.78 5.83-27.61 5.84-12.83 16.17-23.17l116.67-116.66Q442-750.67 456.23-756q14.23-5.33 29.83-5.33 15.61 0 29.77 5.33 14.17 5.33 25.5 16.67L618.67-662q29.33 29.33 66.83 46.67Q723-598 764.67-598v66.67q-55.82 0-106.24-22-50.43-22-89.76-61.34L531.33-652l-106 106.67 88 94V-204h-66.66Zm172.72-545.33q-31.06 0-53.22-22.12Q544-793.56 544-824.61q0-31.06 22.11-53.22Q588.23-900 619.28-900t53.22 22.11q22.17 22.12 22.17 53.17t-22.12 53.22q-22.11 22.17-53.16 22.17ZM763.3-80q-81.63 0-139.13-57.54-57.5-57.53-57.5-139.16t57.53-139.13q57.54-57.5 139.17-57.5T902.5-415.8Q960-358.26 960-276.63T902.46-137.5Q844.93-80 763.3-80Zm.03-66.67q54.67 0 92.34-37.66 37.66-37.67 37.66-92.34 0-54.66-37.66-92.33-37.67-37.67-92.34-37.67-54.66 0-92.33 37.67t-37.67 92.33q0 54.67 37.67 92.34 37.67 37.66 92.33 37.66Z" />
    </svg>
  ),
  gymnastics: (fillColor) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="40px"
      viewBox="0 -960 960 960"
      width="40px"
      fill={fillColor}
    >
      <path d="m486.67-80-20-398.67-146-48H40v-66.66h242l276.67-198 43.33 51-154.67 111L550-606.67 880.67-800 920-753.33 576-498 553.33-80h-66.66ZM240.05-644.67q-31.05 0-53.22-22.11-22.16-22.11-22.16-53.17 0-31.05 22.11-53.22 22.11-22.16 53.17-22.16 31.05 0 53.22 22.11 22.16 22.11 22.16 53.17 0 31.05-22.11 53.22-22.11 22.16-53.17 22.16Z" />
    </svg>
  ),
  hiking: (fillColor) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="40px"
      viewBox="0 -960 960 960"
      width="40px"
      fill={fillColor}
    >
      <path d="M281.33-40 403-660.67q5.33-25.66 24.33-39.16 19-13.5 40-13.5T506.5-704q18.17 9.33 29.5 27.33l39.33 64q18.67 31 50.5 55.5 31.84 24.5 74.17 37.5v-73.66h46.67V-40H700v-411.33q-50-11-93.67-37.67-43.66-26.67-77-65.67L502-418l84.67 80.67V-40H520v-242.67l-94.67-90L352-40h-70.67Zm17-400.33L220-455q-12-2.33-20-14.17-8-11.83-5.67-24.83l30-157q5.34-30 30.67-46.5 25.33-16.5 55.33-11.17l39.34 7.67-51.34 260.67Zm235-309q-31 0-53.16-22.17Q458-793.67 458-824.67t22.17-53.16Q502.33-900 533.33-900q31 0 53.17 22.17 22.17 22.16 22.17 53.16 0 31-22.17 53.17t-53.17 22.17Z" />
    </svg>
  ),
  kayaking: (fillColor) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="40px"
      viewBox="0 -960 960 960"
      width="40px"
      fill={fillColor}
    >
      <path d="M80-40v-66.67h40q31.33 0 61.67-10.33Q212-127.33 240-152.67q28 25.34 58.33 35.67 30.34 10.33 61.67 10.33 30.67 0 61.83-10.66Q453-128 480-152.67q28.67 25.34 58.67 35.67 30 10.33 61.33 10.33 30.67 0 61.83-10.66Q693-128 720-152.67q27 24.67 58.17 35.34 31.16 10.66 61.83 10.66h40V-40h-40q-29.67 0-60-8.17-30.33-8.16-60-28.5-29.67 20.34-60 28.5Q629.67-40 600-40t-60-8.17q-30.33-8.16-60-28.5-29.67 20.34-60 28.5Q389.67-40 360-40t-60-8.17q-30.33-8.16-60-28.5-29.67 20.34-60 28.5Q149.67-40 120-40H80Zm280-157.33q-34 0-65.67-17.67-31.66-17.67-54.33-45.67-14.33 15.34-33.17 29.17-18.83 13.83-38.5 23.83-39.66-9-84-23Q40-244.67 0-260q53.33-21.67 135.67-43.67 82.33-22 154.66-34l55.34-175q9-30 36.5-41t53.16 2.34L540-496.67l118.33-62.66L727-716.67l-20-53 49.67-109.66L872-827.67 823-718l-53 20-153.33 353.33q91.66 11 189.5 36Q904-283.67 960-260q-39 15-84.17 29.17-45.16 14.16-84.16 23.16-19.67-9.66-38.5-23.5Q734.33-245 720-260.67q-22.67 28-54.33 45.67Q634-197.33 600-197.33T534.33-215q-31.66-17.67-54.33-45.67-22.67 28-54.33 45.67Q394-197.33 360-197.33Zm207-153 47.33-111L540-422.67 466-460l-33.33 106.67H480q22.33 0 43.67.5 21.33.5 43.33 2.5Zm-87-239q-31 0-53.17-22.17-22.16-22.17-22.16-53.17t22.16-53.16Q449-740 480-740t53.17 22.17q22.16 22.16 22.16 53.16 0 31-22.16 53.17Q511-589.33 480-589.33Z" />
    </svg>
  ),
  running: (fillColor) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="40px"
      viewBox="0 -960 960 960"
      width="40px"
      fill={fillColor}
    >
      <path d="M216-573.33q37 0 71.33 13.66 34.34 13.67 62 39.34L740-146.67h20q22.67 0 38-15.33 15.33-15.33 15.33-38 0-10.13-1.91-21.53-1.92-11.4-13.42-22.8l-181-181L542.67-648l-86 21.33q-32 8-57.67-11.66Q373.33-658 373.33-691v-92.67L328-806.33 160-581q-1.67 1.67-2.67 3.5t-2.66 4.17H216Zm0 66.66h-67.33q3 9.67 8.5 17.79T170-474l333.33 303q13 12.33 29 18.33 16 6 33.67 6h77.33l-339.66-325q-17.67-17-40.47-26-22.81-9-47.2-9ZM566-80q-30 0-57-11t-50-31L134-417q-46-42-51.5-103T114-631l154-206q17-23 45.5-30.5T368-861l28 14q21 11 32.5 30t11.5 42v84l74-19q30-8 58 7.5t38 44.5l65 196 170 170q20 20 27.5 43t7.5 49q0 50-35 85t-85 35H566Z" />
    </svg>
  ),
  sailing: (fillColor) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="40px"
      viewBox="0 -960 960 960"
      width="40px"
      fill={fillColor}
    >
      <path d="m126-420 307.33-445.33V-420H126Zm127.67-66.67h113V-653l-113 166.33ZM509.33-420q16.67-49.33 27-113 10.34-63.67 10.34-133.67 0-68-10.17-135t-27.17-117Q561-900 617.17-852q56.16 48 103.66 115.33 47.5 67.34 79 148.84T833.33-420h-324ZM594-486.67h166q-17-83.66-60.17-159-43.16-75.33-93.5-125.66 4 27 5.5 53.83t1.5 50.83q0 46.34-5.83 95-5.83 48.67-13.5 85ZM360-197.33q-34.67 0-65.67-18T240-260.67q-14 14.34-32.5 27.67-18.5 13.33-37.17 20.67-31-20.67-55.83-57.17t-33.17-77.17h797.34Q870.33-306 845.5-269.5q-24.83 36.5-55.83 57.17Q771-219.67 752.5-233 734-246.33 720-260.67q-23.67 27.34-54.5 45.34-30.83 18-65.5 18t-65.67-18q-31-18-54.33-45.34-23.33 27.34-54.33 45.34-31 18-65.67 18ZM80-40v-66.67h40q32 0 61.83-10.33 29.84-10.33 58.17-35.67 28.33 25.34 58.5 35.5Q328.67-107 360-107q32 0 61.67-10.17 29.66-10.16 58.33-35.5 28.33 25.34 58.5 35.5Q568.67-107 600-107q32 0 61.67-10.17 29.66-10.16 58.33-35.5 28.67 25.34 58.33 35.67Q808-106.67 840-106.67h40V-40h-40q-29.67 0-60-8.17-30.33-8.16-60-28.5-29.67 20.34-60 28.5Q629.67-40 600-40t-60-8.17q-30.33-8.16-60-28.5-29.67 20.34-60 28.5Q389.67-40 360-40t-60-8.17q-30.33-8.16-60-28.5-29.67 20.34-60 28.5Q149.67-40 120-40H80Zm286.67-446.67Zm227.33 0Z" />
    </svg>
  ),
  snowSports: (fillColor) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="40px"
      viewBox="0 -960 960 960"
      width="40px"
      fill={fillColor}
    >
      <path d="M740.67-40q-24.67 0-48.84-4-24.16-4-47.16-11.33L80.67-261 96-305.33l284.67 103.66 69.66-180L296.67-542q-24.34-26.67-19.17-61.5 5.17-34.83 35.83-52.83L463-743q15-8.67 31.5-9.5 16.5-.83 31.5 4.83 15 5.34 26.83 17Q564.67-719 570-703l13 43q15.67 50.33 47.17 83.33t76.5 49.34l21-64L772-578l-41 126.67q-70-13.34-123-55.34t-80-110l-121.67 70 123 142.67L443-179.33l136.67 49.66L670.33-410q11.34 3.67 22 6.67 10.67 3 21.67 5.33l-91 284.67 37.67 13q18.66 6.66 38.5 10.16 19.83 3.5 41.5 3.5 28 0 53.83-5.33t50.5-17.33l35 35q-32.67 17-67 25.66Q778.67-40 740.67-40Zm-75.34-669.33q-31 0-53.16-22.17Q590-753.67 590-784.67t22.17-53.16Q634.33-860 665.33-860q31 0 53.17 22.17 22.17 22.16 22.17 53.16 0 31-22.17 53.17t-53.17 22.17Z" />
    </svg>
  ),
  surfing: (fillColor) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="40px"
      viewBox="0 -960 960 960"
      width="40px"
      fill={fillColor}
    >
      <path d="M80-40v-66.67h40q32 0 61.67-10.33 29.66-10.33 58.33-35.67 28.67 25.34 58.33 35.5Q328-107 360-107q31.33 0 62.17-10.5Q453-128 480-152.67q28.67 25.34 58.33 35.5Q568-107 600-107q31.33 0 62.17-10.5Q693-128 720-152.67q27 24.67 57.83 35.34 30.84 10.66 62.17 10.66h40V-40h-40q-29.67 0-60-8.17-30.33-8.16-60-28.5-29.67 20.34-60 28.5Q629.67-40 600-40t-60-8.17q-30.33-8.16-60-28.5-29.67 20.34-60 28.5Q389.67-40 360-40t-60-8.17q-30.33-8.16-60-28.5-29.67 20.34-60 28.5Q149.67-40 120-40H80Zm261.33-757.33L560.67-757q12 2 24 10T605-724.33l35 62q26 45.66 71.67 74.33 45.66 28.67 101.66 30v66.67q-74-2-135.66-41.34Q616-572 579-635l-103.33 69.67 157.66 124v158.66Q650-271 665-259.33q15 11.66 30.33 24Q675-218.67 651-208q-24 10.67-51 10.67-34.67 0-65.67-17.67T480-260.67q-23.33 28-54.33 45.67T360-197.33q-4.67 0-9.5-.5t-9.17-2.17q-97.33-67.67-156-127.33Q126.67-387 126.67-429q0-27 22-35.67 22-8.66 45.33-8.66 29 0 68.67 9.5 39.66 9.5 88 26.83L329-569.67q-4-22 2.83-41.16 6.84-19.17 24.17-30.5L455.33-708q-5.66-.67-19.5-3.5-13.83-2.83-29.83-5.67-16-2.83-29.83-6-13.84-3.16-19.5-3.83L247-652l-37.67-54.67 132-90.66Zm65.34 280.66L424-405.33q34.33 16.33 72.67 37.16 38.33 20.84 70 40.17v-73.33l-160-115.34ZM680-749.33q-31 0-53.17-22.17-22.16-22.17-22.16-53.17t22.16-53.16Q649-900 680-900t53.17 22.17q22.16 22.16 22.16 53.16 0 31-22.16 53.17Q711-749.33 680-749.33Z" />
    </svg>
  ),
  swimming: (fillColor) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="40px"
      viewBox="0 -960 960 960"
      width="40px"
      fill={fillColor}
    >
      <path d="M80-120v-69.33q36.67-2 57.33-20.67 20.67-18.67 70-18.67 49.34 0 75.67 21t63.67 21q37.33 0 60.66-21 23.34-21 72.67-21t75.67 21q26.33 21 63.66 21 37.34 0 61-21 23.67-21 73-21 49.34 0 69.67 18.67t57 20.67V-120q-43-2-66.17-21.67-23.16-19.66-60.5-19.66-37.33 0-62.33 20.66Q666-120 619.33-120q-46.66 0-74.33-20.67-27.67-20.66-65-20.66t-63.33 20.66Q390.67-120 344-120t-73-20.67q-26.33-20.66-63.67-20.66-37.33 0-60.83 19.66Q123-122 80-120Zm0-185.33V-372q36.67-2 57.33-20.33 20.67-18.34 70-18.34 49.34 0 74.5 19.34Q307-372 344-372q37.33 0 62-19.33 24.67-19.34 74-19.34t74.33 19.34q25 19.33 62.34 19.33Q654-372 679-391.33q25-19.34 74.33-19.34 49.34 0 69.67 18.34Q843.33-374 880-372v66.67q-43-2-66.17-21.67-23.16-19.67-60.5-19.67-37.33 0-61.83 20.67t-72.17 20.67q-47 0-74.5-20.67T480-346.67q-38 0-61.83 20.67-23.84 20.67-71.5 20.67-47.67 0-74.84-20.67-27.16-20.67-64.5-20.67-37.33 0-60.83 19.67T80-305.33ZM284-512l134.33-134.33L369-695.67q-33.67-33.66-69.33-46.33Q264-754.67 210-754.67v-86q73 0 120.33 17.5 47.34 17.5 92.34 62.5l254 254q-13 9.67-28 14.5-15 4.84-32 4.84-37.34 0-62.67-20.67t-74-20.67q-48.67 0-73.67 20.67T344-487.33q-19 0-34-6.84Q295-501 284-512Zm384-326q40.67 0 68.67 28.17 28 28.16 28 68.5 0 40.66-28 68.66t-68.67 28q-40.67 0-68.67-28t-28-68.66q0-40.34 28-68.5Q627.33-838 668-838Z" />
    </svg>
  ),
};

export const Icon = ({
  name,
  color = "var(--icon-color)",
  fillColor = "none",
}) => {
  const IconComponent = Icons[name];
  if (typeof IconComponent === "function") {
    return IconComponent(color, fillColor);
  }
  return null;
};
