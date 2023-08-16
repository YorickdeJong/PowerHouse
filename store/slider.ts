import { create } from 'zustand';

interface sliderType {
  reviewId: number;
  changeSlide: (id: number) => void;
}

const useSlider = create<sliderType>()((set) => ({
  reviewId: 0,
  changeSlide(id) {
    set({ reviewId: id });
  },
}));

export default useSlider;
