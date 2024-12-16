// import React, { useState } from 'react';
// import './NutritionPage.css';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import NavigationBar from '../components/NavigationBar'; // 네비게이션 바 컴포넌트 가져오기
// import axios from 'axios';
// const NutritionPage = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [isCalendarOpen, setIsCalendarOpen] = useState(false);

//   const [meals, setMeals] = useState({
//     breakfast: ['토스트', '커피'],
//     lunch: ['샐러드'],
//     dinner: [],
//   });

//   const handleCalendarToggle = () => {
//     setIsCalendarOpen(!isCalendarOpen);
//   };

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//     setIsCalendarOpen(false);
//   };

//   return (
//     <div className="nutrition-container">
//       {/* 달력 버튼 */}
//       <div className="calendar-section">
//         <span className="selected-date">
//           {selectedDate.toLocaleDateString('ko-KR')}
//         </span>
//         <button className="calendar-button" onClick={handleCalendarToggle}>
//           달력
//         </button>
//       </div>

//       {/* 달력 표시 */}
//       {isCalendarOpen && (
//         <DatePicker
//           selected={selectedDate}
//           onChange={handleDateChange}
//           inline
//           className="datepicker"
//         />
//       )}

//       {/* 영양 정보 섹터 */}
//       <div className="nutrition-info">
//         <p>
//           섭취 칼로리: <b>1500</b> / 권장 칼로리: <b>2000</b> kcal
//         </p>
//         <p>
//           섭취 단백질: <b>50g</b> / 권장 단백질: <b>75g</b>
//         </p>
//         <p>탄수화물: 200g | 지방: 50g | 당: 20g</p>
//       </div>

//       {/* 식사 섹션 */}
//       <div className="meal-section">
//         {['breakfast', 'lunch', 'dinner'].map((mealKey) => (
//           <div key={mealKey} className="meal-container">
//             <h3 className="meal-title">
//               {mealKey === 'breakfast'
//                 ? '아침'
//                 : mealKey === 'lunch'
//                   ? '점심'
//                   : '저녁'}
//             </h3>
//             <div className="meal-box">
//               {meals[mealKey].length > 0 ? (
//                 meals[mealKey].map((food, idx) => (
//                   <p key={idx} className="meal-item">
//                     {food}
//                   </p>
//                 ))
//               ) : (
//                 <p>등록된 음식이 없습니다.</p>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* 네비게이션 바 */}
//       <NavigationBar />
//     </div>
//   );
// };

// export default NutritionPage;


// import React, { useState, useEffect } from 'react';
// import './NutritionPage.css';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import NavigationBar from '../components/NavigationBar'; // 네비게이션 바 컴포넌트 가져오기
// import axios from 'axios';

// const NutritionPage = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [isCalendarOpen, setIsCalendarOpen] = useState(false);

//   const [meals, setMeals] = useState({
//     breakfast: ['토스트', '커피'],
//     lunch: ['샐러드'],
//     dinner: [],
//   });

//   // 영양 정보 상태
//   const [nutrients, setNutrients] = useState({
//     kcal: 0,
//     protein: 0,
//   });

//   // 달력 토글 핸들러
//   const handleCalendarToggle = () => {
//     setIsCalendarOpen(!isCalendarOpen);
//   };

//   // 날짜 변경 핸들러
//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//     setIsCalendarOpen(false);
//   };

  // 권장 영양 정보 가져오기
  // const fetchNutrientData = async () => {
  //   try {
  //     const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}users/target-nutrients`, {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem('snsToken')}`, // JWT 토큰 전달
  //       },
  //     });
  //     setNutrients({
  //       kcal: response.data.kcal,
  //       protein: response.data.protein,
  //     });
  //   } catch (error) {
  //     console.error('영양 정보 가져오기 실패:', error);
  //     alert('영양 정보를 가져오는 중 오류가 발생했습니다.');
  //   }
  // };

//   const fetchNutrientData = async () => {
//     try {
//       const token = localStorage.getItem('snsToken');
//       if (!token) {
//         alert('로그인이 필요합니다.');
//         return;
//       }
  
//       const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}users/target-nutrients`, {
//         headers: {
//           Authorization: `Bearer ${token}`, // 인증 토큰 추가
//         },
//       });
  
//       setNutrients({
//         kcal: response.data.kcal,
//         protein: response.data.protein,
//       });
//     } catch (error) {
//       console.error('영양 정보 가져오기 실패:', error);
//       if (error.response && error.response.status === 401) {
//         alert('인증 실패: 다시 로그인해주세요.');
//       } else {
//         alert('영양 정보를 가져오는 중 오류가 발생했습니다.');
//       }
//     }
//   };
  

//   // 컴포넌트가 처음 렌더링될 때 API 호출
//   useEffect(() => {
//     fetchNutrientData();
//   }, []);

//   return (
//     <div className="nutrition-container">
//       {/* 달력 버튼 */}
//       <div className="calendar-section">
//         <span className="selected-date">
//           {selectedDate.toLocaleDateString('ko-KR')}
//         </span>
//         <button className="calendar-button" onClick={handleCalendarToggle}>
//           달력
//         </button>
//       </div>

//       {/* 달력 표시 */}
//       {isCalendarOpen && (
//         <DatePicker
//           selected={selectedDate}
//           onChange={handleDateChange}
//           inline
//           className="datepicker"
//         />
//       )}

//       {/* 영양 정보 섹터 */}
//       <div className="nutrition-info">
//         <p>
//           섭취 칼로리: <b>1500</b> / 권장 칼로리: <b>{nutrients.kcal}</b> kcal
//         </p>
//         <p>
//           섭취 단백질: <b>50g</b> / 권장 단백질: <b>{nutrients.protein}</b> g
//         </p>
//         <p>탄수화물: 200g | 지방: 50g | 당: 20g</p>
//       </div>

//       {/* 식사 섹션 */}
//       <div className="meal-section">
//         {['breakfast', 'lunch', 'dinner'].map((mealKey) => (
//           <div key={mealKey} className="meal-container">
//             <h3 className="meal-title">
//               {mealKey === 'breakfast'
//                 ? '아침'
//                 : mealKey === 'lunch'
//                   ? '점심'
//                   : '저녁'}
//             </h3>
//             <div className="meal-box">
//               {meals[mealKey].length > 0 ? (
//                 meals[mealKey].map((food, idx) => (
//                   <p key={idx} className="meal-item">
//                     {food}
//                   </p>
//                 ))
//               ) : (
//                 <p>등록된 음식이 없습니다.</p>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* 네비게이션 바 */}
//       <NavigationBar />
//     </div>
//   );
// };

// export default NutritionPage;
// import React, { useState, useEffect } from 'react';
// import './NutritionPage.css';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import NavigationBar from '../components/NavigationBar'; // 네비게이션 바 컴포넌트 가져오기

// const NutritionPage = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [isCalendarOpen, setIsCalendarOpen] = useState(false);
//   const [meals, setMeals] = useState({
//     breakfast: ['토스트', '커피'],
//     lunch: ['샐러드'],
//     dinner: [],
//   });

//   const [nutrients, setNutrients] = useState({ kcal: 0, carbohydrate : 0, protein: 0, fat : 0, natrium : 0,cholesterol : 0, sugar : 0 });
//   const [error, setError] = useState('');

//   const handleCalendarToggle = () => {
//     setIsCalendarOpen(!isCalendarOpen);
//   };

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//     setIsCalendarOpen(false);
//   };

//   const fetchNutrientData = async () => {
//     const url = `${process.env.REACT_APP_BACKEND_URL}users/target-nutrients`;
//     console.log('Request URL:', url);
//     try {
//       const response = await fetch(url, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${localStorage.getItem('snsToken')}`, // 로컬스토리지에서 토큰 가져오기
//         },
//       });
//       console.log('Response Status:', response.status);

      
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log('Response Data:', data);
//       setNutrients(data);
//       console.log('영양 정보 가져오기 성공:', data);
//     } catch (err) {
//       setError(err.message);
//       console.error('영양 정보 가져오기 실패:', err);
//     }
//   };

//   useEffect(() => {
//     fetchNutrientData();
//   }, []);

//   return (
//     <div className="nutrition-container">
//       {/* 달력 버튼 */}
//       <div className="calendar-section">
//         <span className="selected-date">
//           {selectedDate.toLocaleDateString('ko-KR')}
//         </span>
//         <button className="calendar-button" onClick={handleCalendarToggle}>
//           달력
//         </button>
//       </div>

//       {/* 달력 표시 */}
//       {isCalendarOpen && (
//         <DatePicker
//           selected={selectedDate}
//           onChange={handleDateChange}
//           inline
//           className="datepicker"
//         />
//       )}

//       {/* 영양 정보 섹터 */}
//       <div className="nutrition-info">
//         {error ? (
//           <p className="error-message">영양 정보 가져오기 실패: {error}</p>
//         ) : (
//           <>
//             <p>
//               섭취 칼로리: <b>1500</b> / 권장 칼로리: <b>{nutrients.kcal}</b> kcal
//             </p>
//             <p>
//               섭취 단백질: <b>50g</b> / 권장 단백질: <b>{nutrients.protein}</b>
//             </p>
//             <p>탄수화물: 200g | 지방: 50g | 당: 20g</p>
//           </>
//         )}
//       </div>

//       {/* 식사 섹션 */}
//       <div className="meal-section">
//         {['breakfast', 'lunch', 'dinner'].map((mealKey) => (
//           <div key={mealKey} className="meal-container">
//             <h3 className="meal-title">
//               {mealKey === 'breakfast'
//                 ? '아침'
//                 : mealKey === 'lunch'
//                 ? '점심'
//                 : '저녁'}
//             </h3>
//             <div className="meal-box">
//               {meals[mealKey].length > 0 ? (
//                 meals[mealKey].map((food, idx) => (
//                   <p key={idx} className="meal-item">
//                     {food}
//                   </p>
//                 ))
//               ) : (
//                 <p>등록된 음식이 없습니다.</p>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* 네비게이션 바 */}
//       <NavigationBar />
//     </div>
//   );
// };

// export default NutritionPage;
import React, { useState, useEffect } from 'react';
import './NutritionPage.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import NavigationBar from '../components/NavigationBar'; // 네비게이션 바 컴포넌트 가져오기

const NutritionPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [meals, setMeals] = useState({
    breakfast: ['토스트', '커피'],
    lunch: ['샐러드'],
    dinner: [],
  });

  const [nutrients, setNutrients] = useState({
    kcal: 0,
    carbohydrate: 0,
    protein: 0,
    fat: 0,
    natrium: 0,
    cholesterol: 0,
    sugar: 0,
  });
  const [error, setError] = useState('');

  const handleCalendarToggle = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsCalendarOpen(false);
  };

  const fetchNutrientData = async () => {
    const apiUrl = `${process.env.REACT_APP_BACKEND_URL}users/target-nutrients`; // Ensure this URL is correct
    console.log('Request URL:', apiUrl);

    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('Back_Token')}`, // 토큰 추가
        },
      });

      console.log('Response Status:', response.status);

      if (response.ok) {
        const data = await response.json();
        console.log('Response Data:', data);
        setNutrients(data); // 데이터 상태 업데이트
      } else {
        // 서버에서 응답은 있지만 에러 코드가 있을 때
        const errorData = await response.json();
        console.error('API Error Response:', errorData);
        throw new Error(`Server Error: ${errorData.message || 'Unknown error'}`);
      }
    } catch (err) {
      setError(err.message);
      console.error('영양 정보 가져오기 실패:', err);
    }
  };

  useEffect(() => {
    fetchNutrientData();
  }, []);

  return (
    <div className="nutrition-container">
      {/* 달력 버튼 */}
      <div className="calendar-section">
        <span className="selected-date">
          {selectedDate.toLocaleDateString('ko-KR')}
        </span>
        <button className="calendar-button" onClick={handleCalendarToggle}>
          달력
        </button>
      </div>

      {/* 달력 표시 */}
      {isCalendarOpen && (
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          inline
          className="datepicker"
        />
      )}

      {/* 영양 정보 섹터 */}
      <div className="nutrition-info">
        {error ? (
          <p className="error-message">영양 정보 가져오기 실패: {error}</p>
        ) : (
          <>
            <p>
              칼로리: <b>1500</b>/<b>{nutrients.kcal}</b> kcal
            </p>
            <p>
              탄수화물: <b>100</b>/<b>{nutrients.carbohydrate}</b>g | 단백질: <b>50</b>/<b>{nutrients.protein}</b>g
            </p>
            <p>
              지방: <b>20</b>/<b>{nutrients.fat}</b>g | 나트륨: <b>50</b>/<b>{nutrients.natrium}</b>mg
            </p>
            <p>
              콜레스테롤: <b>50</b>/<b>{nutrients.cholesterol}</b>mg | 당: <b>50</b>/<b>{nutrients.sugar}</b>g
            </p>
          </>
        )}
      </div>

      {/* 식사 섹션 */}
      <div className="meal-section">
        {['breakfast', 'lunch', 'dinner'].map((mealKey) => (
          <div key={mealKey} className="meal-container">
            <h3 className="meal-title">
              {mealKey === 'breakfast'
                ? '아침'
                : mealKey === 'lunch'
                ? '점심'
                : '저녁'}
            </h3>
            <div className="meal-box">
              {meals[mealKey].length > 0 ? (
                meals[mealKey].map((food, idx) => (
                  <p key={idx} className="meal-item">
                    {food}
                  </p>
                ))
              ) : (
                <p>등록된 음식이 없습니다.</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 네비게이션 바 */}
      <NavigationBar />
    </div>
  );
};

export default NutritionPage;
