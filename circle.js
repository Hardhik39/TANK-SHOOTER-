class c_Enemy
    {
        constructor(l_x,l_y)
        {
            this.Enemy_X=l_x;
            this.Enemy_Y=l_y;
           
            this.Enemy_Move_Speed=0;
            this.Enemy_Move_Speed=parseInt(Math.random()*(15-10)+10);
            this.Enemy_Radius=parseInt(Math.random()*(80-20)+20);
        }
        m_draw_Enemy(l_context)
        {
           l_context.fillStyle="yellow";
            l_context.beginPath();
            l_context.arc(this.Enemy_X,this.Enemy_Y,this.Enemy_Radius,0,2*Math.PI);
            l_context.closePath();
            l_context.fill();
            
        }
        
       
       
    }