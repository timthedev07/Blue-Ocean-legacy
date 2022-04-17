import { FC } from "react";
import { HalfStar, Star } from "./icons/Stars";

interface RatingDisplayProps {
  rating: number;
  starClassName?: string;
}

export const RatingDisplay: FC<RatingDisplayProps> = ({
  rating,
  starClassName = "w-4 h-4",
}) => {
  const numWholeStars = Math.floor(rating);
  const hasHalfStar = (rating * 10) % 10 !== 0;
  return (
    <div className="flex gap-1">
      {[...Array(numWholeStars)].map((_, i) => (
        <Star className={starClassName} key={i} />
      ))}
      {hasHalfStar ? <HalfStar className={starClassName} /> : ""}
    </div>
  );
};
