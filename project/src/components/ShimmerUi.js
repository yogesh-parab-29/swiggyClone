const ShimmerCard = () => {
  return (
    <>
      <a href="#" data-testid="shimmer" className="restaurant-card">
        <div className="rc-card">
          <div className="rc-img-container skeleton"></div>
          <h3 className="rc-name skeleton skeleton-text"></h3>
          <h4 className="rc-category skeleton skeleton-text"></h4>
          <div>
            <span className="rc-rating skeleton skeleton-text"></span>
            <span>|</span>
            <span className="rc-edt  skeleton skeleton-text"></span>
            <span>|</span>
            <span className="rc-cost skeleton skeleton-text"></span>
          </div>
          <div className="rc-quick-view skeleton">
            <span className="skeleton skeleton-text"></span>
          </div>
        </div>
      </a>
    </>
  );
};

export default ShimmerCard;
