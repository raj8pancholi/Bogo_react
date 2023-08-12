import React from 'react';
import { Link } from 'react-router-dom';

const JoinInfluencerArrow = () => {
  return (
    <div className="bacome_right_outer_section join-influencer-arrow">
      <p>
        <Link to="/brand_ambassadors">
          Join Influencer Program
          <i className="fa fa-arrow-right pl-2" aria-hidden="true" />
        </Link>
      </p>
    </div>
  );
};

export default JoinInfluencerArrow;
