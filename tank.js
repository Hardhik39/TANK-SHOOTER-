class c_TANK
            {
                constructor(l_x,l_y)
                    {
                        
                        this.width=200;
                        this.height=200;
                        this.Basecolor="yellow";
                        this.X=l_x;
                        this.Y=l_y;
                        this.TurretColor="black";
                        this.centerX = this.X+(this.width/2);
                       this.centerY = this.Y+(this.height/2);
                       this.rotatespeed=10;
                        this.MoveLeftflag=0;
                        this.MoveRightflag=0;
						
                         this.radius=this.width/2;
                    this.TurretWidth = 50;
                        this.TurretHeight = 95;
                   this.g_rotateangle=270;
					
                        
                    this.bullet = new c_bullet(this.centerX,this.centerY);
						
					
                    }
                
                
                    m_drawTank(l_context)
                    {
                       
                        
                        l_context.fillStyle=this.TurretColor;
                        l_context.beginPath();
                        l_context.arc(this.centerX,this.centerY,this.radius,0,2*Math.PI);
                        l_context.closePath();
                        l_context.fillStyle=this.Basecolor;
                        l_context.fill();
                        
                        
                l_context.save();
                l_context.translate(this.centerX,this.centerY); // move back
                l_context.rotate(Math.PI*this.g_rotateangle/180); // rotate
                l_context.fillStyle=this.TurretColor;
                l_context.fillRect(-(this.TurretWidth/2), 0,this.TurretWidth,this.TurretHeight);
                l_context.restore();
                        
                        l_context.fillStyle=this.TurretColor;
                        l_context.beginPath();
                        l_context.arc(this.centerX,this.centerY,this.TurretWidth/2,0,2*Math.PI);
                        l_context.closePath();
                        l_context.fill();
                        
                        this.bullet.m_draw_bullet(l_context);
                    }
                 
                m_rotateTurret()
                {
                    if(this.MoveLeftflag==1)
                    {
                        this.g_rotateangle -= this.rotatespeed;
                        
                         
                        
                    }
                    if(this.MoveRightflag==1)
                    {
                        this.g_rotateangle +=this.rotatespeed;
                        
                       
                       
                    }
					this.bullet.m_movement();
                    
                
                }
	           m_Shoot()//shooting the bullet
                {
                    if (this.bullet.Start_animat_flag == 0) 
					{
                  this.launchAngle = this.g_rotateangle;
                      
                     }

    
                     var launchAngleRad = (this.launchAngle * (Math.PI)) / 180;
					
   
                   this.bullet.xSpeed = this.bullet.initial_velocity * Math.sin(launchAngleRad);
                this.bullet.ySpeed = this.bullet.initial_velocity * Math.cos(launchAngleRad);
               }
                
                
			}
                
              