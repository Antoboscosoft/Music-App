import React, { useEffect, useRef } from 'react';

function BouncingBall() {

    const canvasRef = useRef(null);

    // useEffect(() => {
    //     const canvas = canvasRef.current;
    //     const ctx = canvas.getContext('2d');
    //     let ballX = canvas.width / 2;
    //     let ballY = canvas.height / 2;
    //     let balRadius = 10;
    //     let dx = 2;
    //     let dy = -2;

    //     const drawBall = () => {
    //         ctx.beginPath();
    //         ctx.arc(ballX, ballY, balRadius, 0, Math.PI * 2);
    //         ctx.fileStyle = 'red'; // #0095DD
    //         ctx.fill();
    //         ctx.closePath();
    //     };

    //     const update = () => {
    //         ctx.clearReact(0, 0, canvas.width, canvas.height);
    //         drawBall();

    //         // Bounce off the left and right edges
    //         if (ballX + dx > canvas.width - balRadius || ballX + dx < balRadius) {
    //             dx = -dx;
    //         }

    //         // Bounce off the top and bottom edges
    //         if (ballY + dy > canvas.height - balRadius || ballY + dy < balRadius) {
    //             dy = -dy;
    //         }

    //         ballX += dx;
    //         ballY += dy;

    //         requestAnimationFrame(update);
    //     };
    //     update();
    // },[]);

    let ballRadius = 10;
    let x = 0;
    let y = 0;
    let dx = 2;
    let dy = -2;

    let paddleHeight = 12;
    let paddleWidth = 72;
    let paddleX = 0;

    let rightPressed = false;
    let leftPressed = false;

    let brickRowCount = 3;
    let brickColumnCount = 7;
    let brickWidth = 72;
    let brickHeight = 24;
    let brickPadding = 12;
    let brickOffsetTop = 32;
    let brickOffsetLeft = 32;
    let score = 0;

    let bricks = [];

    for (let c = 0; c < brickColumnCount; c++) {
        bricks[c] = [];
        for (let r = 0; r < brickRowCount; r++) {
            bricks[c][r] = { x: 0, y: 0, status: 1 };
        }
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        x = canvas.width / 2;
        y = canvas.height - 30;
        paddleX = (canvas.width - paddleWidth) / 2;

        document.addEventListener('keydown', keyDownHandler, false);
        document.addEventListener('keyup', keyUpHandler, false);
        document.addEventListener('mousemove', mouseMoveHandler, false);

        function mouseMoveHandler(e) {
            var relativeX = e.clientX - canvas.offsetLeft;
            if (relativeX > 0 && relativeX < canvas.width) {
                paddleX = relativeX - paddleWidth / 2;
            }
        }

        function keyDownHandler(e) {
            // if(e.key === 'Right' || e.key === 'ArrowRight') {
            //     rightPressed = true;
            // }
            // else if(e.key === 'Left' || e.key === 'ArrowLeft') {
            //     leftPressed = true;
            // }
            if (e.keyCode === 39) {
                rightPressed = true;
            }
            else if (e.keyCode === 37) {
                leftPressed = true;
            }
        }

        function keyUpHandler(e) {
            if (e.keyCode === 39) {
                rightPressed = false;
              }
              else if (e.keyCode === 37) {
                leftPressed = false;
              }
        }

        function drawBall() {
            ctx.beginPath();   
            ctx.arc(x, y, ballRadius, 0, Math.PI * 2); 
            ctx.fileStyle = 'lawngreen'; // #0095DD  red
            ctx.fill();
            ctx.closePath();
        }

        function drawPaddle() {
            ctx.beginPath();
            ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
            ctx.fileStyle = '#0095DD'; // #0095DD
            ctx.fill();
            ctx.closePath();
        }

        function drawBricks() {
            for (let c = 0; c < brickColumnCount; c++) {
                for (let r = 0; r < brickRowCount; r++) {
                    if (bricks[c][r].status === 1) {
                        let brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
                        let brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
                        bricks[c][r].x = brickX;
                        bricks[c][r].y = brickY;
                        ctx.beginPath();
                        ctx.rect(brickX, brickY, brickWidth, brickHeight);
                        ctx.fileStyle = '#0095DD'; // #0095DD
                        ctx.fill();
                        ctx.closePath();
                    }
                }
            }
        }

        function drawScore() {  
            ctx.font = '16px Arial';
            ctx.fillStyle = 'white'; // #0095DD  #0095DD
            ctx.fillText('Score: ' + score, 8, 20);
        }

        function collisionDetection() {
            for (let c = 0; c < brickColumnCount; c++) {
                for (let r = 0; r < brickRowCount; r++) {
                    let b = bricks[c][r];
                    if (b.status === 1) {
                        if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                            dy = -dy;
                            b.status = 0;
                            score += 1;
                            if (score === brickRowCount * brickColumnCount) {
                                alert('YOU WIN, CONGRATULATIONS!');
                                document.location.reload();
                            }
                        }
                    }
                }
            }
        }

        function draw(){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScore();
            drawBricks();
            drawBall();
            drawPaddle();
            collisionDetection();


            if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
                dx = -dx;
            }
            if (y + dy < ballRadius) {
                dy = -dy;
            }
            else if (y + dy > canvas.height - ballRadius) {
                if (x > paddleX && x < paddleX + paddleWidth) {
                    dy = -dy;
                }
                else {
                    alert('GAME OVER');
                    document.location.reload();
                }
            }

            if(rightPressed && paddleX < canvas.width - paddleWidth) {
                paddleX += 7;
            } 
            else if(leftPressed && paddleX > 0) {
                paddleX -= 7;
            }

            x += dx;
            y += dy;
        }

        const interval = setInterval(draw, 10);

        return () => {
            clearInterval(interval);
            // ctx.clearRect(0, 0, canvas.width, canvas.height);
            // clearInterval(interval);
            // ctx.clearRect(0, 0, canvas.width, canvas.height);
            document.removeEventListener('keydown', keyDownHandler);
            document.removeEventListener('keyup', keyUpHandler);
            document.removeEventListener('mousemove', mouseMoveHandler);
        };
    }, []);



    return (
        <div>
            <canvas ref={canvasRef} width={300} height={300} style={{ backgroundColor: 'black', marginTop: '10rem', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
        </div>
    )
}

export default BouncingBall