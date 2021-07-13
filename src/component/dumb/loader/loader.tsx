import * as React from 'react'
import './loader.scss'

export const Loader : React.FC = () => {
  return (
      <div className="cssload-fond">
          <div className="cssload-container-general">
              <div className="cssload-internal">
                  <div className="cssload-ballcolor cssload-ball_1">
                  </div>
              </div>
              <div className="cssload-internal">
                  <div className="cssload-ballcolor cssload-ball_2">
                  </div>
              </div>
              <div className="cssload-internal">
                  <div className="cssload-ballcolor cssload-ball_3">
                  </div>
              </div>
              <div className="cssload-internal">
                  <div className="cssload-ballcolor cssload-ball_4">
                  </div>
              </div>
          </div>
      </div>
  )
}
