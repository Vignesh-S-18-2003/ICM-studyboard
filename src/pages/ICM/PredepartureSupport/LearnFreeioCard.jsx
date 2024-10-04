export default function LearnFreeioCard({ data }) {
  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '20px',
    borderRadius: '16px',
    background: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    height: '100%', // Ensures the card takes full height
  };

  const contentStyle = {
    flexGrow: 1, // Allows content area to take up remaining space
  };

  const thumbStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const avatarStyle = {
    width: '50px', // Fixed width for avatar
    height: '50px', // Fixed height for avatar
    borderRadius: '50%', // Makes the avatar circular
  };

  return (
    <div style={cardStyle} className="testimonial-style1 default-box-shadow1 position-relative bdrs16">
      <div style={contentStyle} className="testimonial-content">
        <h4 className="title text-thm">{data.title}</h4>
        <h4 className="t_content">{data.description}</h4>
      </div>
      <div style={thumbStyle} className="thumb">
        <div className="flex-shrink-0">
          <img src={data.avatar} alt={`${data.name}'s avatar`} style={avatarStyle} />
        </div>
        <div className="flex-grow-1 ms-3">
          <h6 className="mb-0">{data.name}</h6>
          <p className="fz14 mb-0">{data.skill}</p>
        </div>
      </div>
    </div>
  );
}
