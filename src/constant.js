 const RAIN_IMG="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Frainy-weather&psig=AOvVaw1fFQgtcZeQ0Mx61QNoQ6kr&ust=1714122363800000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKDw88SB3YUDFQAAAAAdAAAAABAE";
 const CLEAR_IMG="https://images.pexels.com/photos/912364/pexels-photo-912364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
 const SNOW_IMG="https://images.pexels.com/photos/65911/winter-nature-season-trees-65911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
 const FEW_CLOUDS="https://images.pexels.com/photos/531767/pexels-photo-531767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
 const SCATTERED_CLOUDS="https://images.pexels.com/photos/19264179/pexels-photo-19264179/free-photo-of-clouds-over-rural-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
 const BROKEN_CLOUDS="https://images.pexels.com/photos/158163/clouds-cloudporn-weather-lookup-158163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
 const THUNDERSTORM="https://images.pexels.com/photos/3637060/pexels-photo-3637060.jpeg?auto=compress&cs=tinysrgb&w=600";
 const HAZE="https://images.pexels.com/photos/7244475/pexels-photo-7244475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";



export const weatherConditions = [
    { code: '01d', imageUrl: CLEAR_IMG },
    { code: '01n', imageUrl: CLEAR_IMG },
    { code: '02d', imageUrl: FEW_CLOUDS },
    { code: '02n', imageUrl: FEW_CLOUDS },
    { code: '03d', imageUrl: SCATTERED_CLOUDS },
    { code: '03n', imageUrl: SCATTERED_CLOUDS },
    { code: '04d', imageUrl: BROKEN_CLOUDS },
    { code: '04n', imageUrl: BROKEN_CLOUDS },
    { code: '09d', imageUrl: RAIN_IMG },
    { code: '09n', imageUrl: RAIN_IMG },
    { code: '10d', imageUrl: RAIN_IMG },
    { code: '10n', imageUrl: RAIN_IMG },
    { code: '11d', imageUrl: THUNDERSTORM },
    { code: '11n', imageUrl: THUNDERSTORM },
    { code: '13d', imageUrl: SNOW_IMG },
    { code: '13n', imageUrl: SNOW_IMG },
    { code: '50d', imageUrl: HAZE },
    { code: '50n', imageUrl: HAZE }
];
