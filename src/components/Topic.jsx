import { useEffect, useState, useMemo } from "react";
import Notice from "../components/Notice";

const calculateAveragePerMonth = (movies) => {
  const monthlyCounts = movies.reduce((counts, movie) => {
    const month = movie.complete.slice(0, 7);
    counts[month] = (counts[month] || 0) + 1;
    return counts;
  }, {});

  const totalMonths = Object.keys(monthlyCounts).length;
  const totalMovies = movies.length;
  return totalMonths ? parseFloat((totalMovies / totalMonths).toFixed(2)) : 0;
};

const calculateStreak = (movies) => {
  const monthsWithData = new Set(
    movies.map((movie) => movie.complete.slice(0, 7))
  );

  const sortedMonths = Array.from(monthsWithData).sort();

  let maxStreak = 0;
  let currentStreak = 1;

  for (let i = 1; i < sortedMonths.length; i++) {
    const [prevYear, prevMonth] = sortedMonths[i - 1].split("-").map(Number);
    const [currYear, currMonth] = sortedMonths[i].split("-").map(Number);

    const isConsecutive =
      (currYear === prevYear && currMonth === prevMonth + 1) ||
      (currYear === prevYear + 1 && currMonth === 1 && prevMonth === 12);

    if (isConsecutive) {
      currentStreak++;
    } else {
      maxStreak = Math.max(maxStreak, currentStreak);
      currentStreak = 1;
    }
  }

  return Math.max(maxStreak, currentStreak);
};

const calculateAverageReview = (movies) => {
  if (movies.length === 0) return 0;
  const totalRating = movies.reduce((sum, movie) => sum + movie.rating, 0);
  return parseFloat((totalRating / movies.length).toFixed(2));
};

const Topic = ({ movies }) => {
  const [averagePerMonth, setAveragePerMonth] = useState(0);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    setAveragePerMonth(calculateAveragePerMonth(movies));
    setStreak(calculateStreak(movies));
  }, [movies]);

  const averageReview = useMemo(() => calculateAverageReview(movies), [movies]);

  return (
    <div className="topic">
      <Notice title="累計学習講座数" data={movies.length} />
      <Notice title="月平均学習講座数" data={averagePerMonth} />
      <Notice title="連続学習期間（ヶ月）" data={streak} />
      <Notice title="平均レビュー" data={averageReview} />
    </div>
  );
};

export default Topic;
