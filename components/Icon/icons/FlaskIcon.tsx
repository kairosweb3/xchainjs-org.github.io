interface Props {
  className?: string
}

export function FlaskIcon ({ className }: Props) {
  return (
    <svg className={className} width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path fill='currentcolor' fillRule='evenodd' clipRule='evenodd' d='M5.99999 0C5.80224 4.22243e-05 5.60895 0.0587141 5.44454 0.168598C5.28013 0.278483 5.15199 0.434646 5.07632 0.617345C5.00065 0.800045 4.98084 1.00108 5.01941 1.19503C5.05798 1.38898 5.15318 1.56715 5.29299 1.707L5.99999 2.414V6.172C5.99994 6.43719 5.89454 6.69151 5.70699 6.879L1.70699 10.879C-0.183005 12.769 1.15599 16 3.82799 16H14.171C16.844 16 18.183 12.769 16.293 10.879L12.293 6.879C12.1054 6.69151 12.0001 6.43719 12 6.172V2.414L12.707 1.707C12.8468 1.56715 12.942 1.38898 12.9806 1.19503C13.0191 1.00108 12.9993 0.800045 12.9237 0.617345C12.848 0.434646 12.7199 0.278483 12.5555 0.168598C12.391 0.0587141 12.1977 4.22243e-05 12 0H5.99999ZM7.99999 6.172V2H9.99999V6.172C10.0004 6.96724 10.3166 7.72977 10.879 8.292L11.906 9.32C11.1868 9.15298 10.4354 9.18828 9.73499 9.422L9.26499 9.578C8.44387 9.85173 7.55612 9.85173 6.73499 9.578L6.17199 9.391C6.13435 9.3782 6.09633 9.36653 6.05799 9.356L7.12099 8.293C7.68364 7.73052 7.99982 6.96758 7.99999 6.172Z'/>
    </svg>
  )
}
