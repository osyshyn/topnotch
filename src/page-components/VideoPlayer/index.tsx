export const VideoPlayer = () => {
  return (
    <video className="h-full w-full rounded-lg" controls>
      <source
        src="https://docs.material-tailwind.com/demo.mp4"
        type="video/mp4"
      />
    </video>
  );
};
