import cn from 'classnames';

export interface VideoPlayerProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const VideoPlayer = ({ className, width, height }: VideoPlayerProps) => {
  return (
    <video
      className={cn(className, 'rounded-lg')}
      controls
      style={{
        width: width || '100%',
        height: height || '100%',
      }}
    >
      <source
        src="https://docs.material-tailwind.com/demo.mp4"
        type="video/mp4"
      />
    </video>
  );
};
