import React from 'react';
// CSS

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className='project-details'>
      <div className='project-card'>
        <h4 className='project-title'>Project Title - {id}</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis libero ac dolor placerat, a dictum arcu consectetur. Ut quis ligula nunc. In id scelerisque turpis. Suspendisse varius mi sed justo pellentesque, eu consectetur urna ultricies. Etiam imperdiet malesuada lectus, eu ullamcorper ex volutpat nec. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin mattis tortor odio, vel maximus purus volutpat vel. Proin in varius justo, eget congue nibh. Vivamus tortor justo, molestie at nisl ac, fringilla vehicula orci. Aliquam interdum lacus vel ipsum venenatis, ac accumsan ante ullamcorper. Nulla tempor quis diam et imperdiet. Aliquam non quam at dui gravida egestas.

          Donec egestas vitae arcu id euismod. Etiam eget nibh aliquam, volutpat metus ac, mollis tortor. Fusce lacinia, eros in ultrices tempus, diam nisl porttitor lectus, ornare porta ligula elit id est. Etiam nec convallis leo. Mauris pulvinar ac tellus condimentum viverra. Sed at mi libero. Pellentesque hendrerit libero et condimentum commodo. Nunc urna arcu, tristique vitae massa quis, eleifend vehicula eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas vitae ante a sapien molestie hendrerit eu ac ligula. Donec consequat eget ligula ac consectetur. Sed ex quam, mollis at libero in, imperdiet laoreet ipsum. Donec vehicula sapien augue. Duis condimentum a massa non posuere. Donec volutpat elit purus, vitae auctor quam egestas vel. Nam a dui pulvinar, bibendum lorem quis, ullamcorper sem.
        </p>
        <div className='card-action'>
          <div className='author'>Posted by Dave Hoffman</div>
          <div className='date-posted'>December 3rd, 2018, 9:28am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails;