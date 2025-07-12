import {Ratelimit} from '@upstash/ratelimit';
import {Redis} from '@upstash/redis';

//this rate limiter only allows 100 requests every minute.
const rateLimit =  new Ratelimit ( {
    redis : Redis.fromEnv(),
    limiter : Ratelimit.slidingWindow(100, "60 s")
});

export default rateLimit;