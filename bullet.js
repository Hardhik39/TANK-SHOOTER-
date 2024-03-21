class c_bullet
    {
        constructor (l_x, l_y)
        {

            
            this.xpos=l_x;
            this.ypos=l_y;
            this.radius=20;
            this.color="#f5e35b";
           
            this.initial_velocity=100;
            
            
            this.Start_animat_flag=0;
            
            this.ySpeed=this.initial_velocity;
            this.xSpeed=90;
            
            
           
           
            
            
            
        }
        
        m_draw_bullet(l_context)
        {
            l_context.fillStyle=this.color;
            l_context.beginPath();
            l_context.arc(this.xpos,this.ypos,this.radius,0,2*Math.PI);
            l_context.closePath();
            l_context.fill();
			
        }
       m_Border_collision(l_canvas)
        {
        
            if ((this.ypos + this.radius) > l_canvas.height||(this.ypos + this.radius) <0||(this.xpos + this.radius) > l_canvas.width||(this.xpos + this.radius) <0) 
                {
                    
                    this.xpos=tank.centerX;
                    this.ypos=tank.centerY;
                    this.radius=20;
                    //this.color="#f57546";
           
                    //this.initial_velocity=20;
                   
            
                    this.Start_animat_flag=0;
            
                    //this.ySpeed=this.initial_velocity;
                    //this.xSpeed=20;
               
                   
                
           
                    
                }
		}
			
        
        m_movement()
        {
            if(this.Start_animat_flag==1)
                {

            this.ypos += this.ySpeed;
           

            this.xpos -= this.xSpeed;
					
                    
                }
         }
          
             
        
    }