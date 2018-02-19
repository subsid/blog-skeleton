---
title: The great FFT (Part 2)
tags: [FFT, algorithms]
date: "2018-02-07T17:30:00.000Z"
path: "/blog/the-great-fft-part-2/"
draft: true
---

In this part, we'll discuss an implementation of the FFT algorithm explained in [Part 1](https://subsid.github.io/blog/the-great-fft-part-1/). Please go through that post, before reading this.

**Our big take aways from part 1**
- Evaluation is $O(n)$ if we use coefficient representation.
- Multiplication is $O(n)$ if we use point-value representation.
- It is possible to convert between the 2 in $O(nlg(n))$ using a divide and conquer approach. (aka FFT)

Thus, it is possible to *multiply*, *add* and *evaluate* polynomials in $O(nlg(n))$ time.

