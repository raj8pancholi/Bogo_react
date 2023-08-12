import React from 'react'

export default function SearchBox() {
  return (
    <>
      {/* <!-- Search box --> */}
      <div class="row">
            <div class="col-12">
              <div class="searchBox_row">
                <form action="" class="searchBox">
                  <div class="input-group">
                    <div class="input-group-append">
                      <button class="btn " type="button">
                        <img src="/images/search.png" alt="" class="img-fluid" />
                      </button>
                    </div>
                    <input type="text" class="form-control search_input" placeholder="Search Venue" />

                  </div>
                </form>
              </div>
            </div>
          </div>  
    </>
  )
}
