import React from 'react'

function ContainersGrids() {
  return (
    <div>

<div className="container my-5">
    <h2>normal container</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos ratione labore modi vel facere pariatur. Nobis beatae ab officia assumenda nisi ea eos soluta accusamus iure minus iste reiciendis veritatis asperiores perferendis iusto, veniam tempora nulla repudiandae exercitationem? Eius rerum illo nulla corporis odio quos porro vero. Eveniet nulla deserunt odio tenetur vero nihil veritatis, quo repudiandae iusto blanditiis ipsum.</p>
  </div>

  <div className="container-fluid my-5">
    <h2>fluid container</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis obcaecati consequuntur mollitia distinctio, ratione enim quia sint repellat velit accusantium. Vel id architecto facilis facere soluta veritatis suscipit praesentium deleniti numquam impedit doloremque, recusandae reiciendis similique eos labore, quisquam quia voluptate distinctio maiores! Assumenda iure doloremque cupiditate architecto odit maiores magni itaque in, numquam qui cumque, blanditiis magnam aperiam. Dolor.</p>
  </div>

  <div className="container-lg my-5">
    <h2>100% until lg screens, then container</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil dolore doloremque iure corporis, cumque voluptate commodi minus. Accusantium magni ut omnis excepturi cumque! Debitis fugiat cumque nihil corrupti eius facere corporis natus? Cumque numquam vitae ipsam eum quaerat omnis vel corrupti perferendis totam iste quisquam, facere consequuntur aut, ea, doloribus aperiam. Ad eius facilis nulla! Ea optio in corporis ab.</p>
  </div>

  <div className="container-xl my-5">
    <h2>100% until xl screens, then container</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil dolore doloremque iure corporis, cumque voluptate commodi minus. Accusantium magni ut omnis excepturi cumque! Debitis fugiat cumque nihil corrupti eius facere corporis natus? Cumque numquam vitae ipsam eum quaerat omnis vel corrupti perferendis totam iste quisquam, facere consequuntur aut, ea, doloribus aperiam. Ad eius facilis nulla! Ea optio in corporis ab.</p>
  </div>




        <div className="container-lg my-5">
    <h2>basic grid</h2>
    <div className="row">
      <div className="col">
        <div className="p-5 bg-primary text-light">col 1</div>
      </div>
      <div className="col">
        <div className="p-5 bg-primary text-light">col 2</div>
      </div>
      <div className="col">
        <div className="p-5 bg-primary text-light">col 3</div>
      </div>
    </div>
  </div>

  <div className="container-lg my-5">
    <h2>column widths</h2>
    <div className="row">
      <div className="col-6">
        <div className="p-5 bg-primary text-light">col 1</div>
      </div>
      <div className="col-3">
        <div className="p-5 bg-primary text-light">col 2</div>
      </div>
      <div className="col-3">
        <div className="p-5 bg-primary text-light">col 3</div>
      </div>
    </div>
  </div>

  <div className="container-lg my-5">
    <h2>responsive column widths</h2>
    <div className="row gy-3">
         {/* <!-- manually change gutter using g{d}-{n} --> */}
      <div className="col-sm-4 col-lg-6">
        <div className="p-5 bg-primary text-light">col 1</div>
      </div>
      <div className="col-sm-4 col-lg-3">
        <div className="p-5 bg-primary text-light">col 2</div>
      </div>
      <div className="col-sm-4 col-lg-3">
        <div className="p-5 bg-primary text-light">col 3</div>
      </div>
    </div>
  </div>

  <div className="container-lg m-5">
    <h2>justifying columns</h2>
    <div className="row justify-content-around">
        {/* <!-- j-c-end, j-c-start, j-c-between, j-c-around --> */}
      <div className="col-md-6 col-sm-2">
        <div className="p-5 bg-primary text-light">col 1</div>
      </div>
      <div className="col-md-3 col-sm-2">
        <div className="p-5 bg-primary text-light">col 2</div>
      </div>
      <div className="col-md-3 col-sm-2">
        <div className="p-5 bg-primary text-light">col 3</div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default ContainersGrids