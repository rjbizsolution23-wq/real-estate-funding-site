'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, CheckCircle, Clock, Mail, Phone, Star, Users } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 14, minutes: 32, seconds: 45 });
  const { toast } = useToast();

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const totalSeconds = prev.days * 24 * 60 * 60 + prev.hours * 60 * 60 + prev.minutes * 60 + prev.seconds;
        if (totalSeconds <= 0) return prev;
        
        const newTotal = totalSeconds - 1;
        return {
          days: Math.floor(newTotal / (24 * 60 * 60)),
          hours: Math.floor((newTotal % (24 * 60 * 60)) / (60 * 60)),
          minutes: Math.floor((newTotal % (60 * 60)) / 60),
          seconds: newTotal % 60
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-800 opacity-95"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <Image
          src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1600&auto=format&fit=crop&q=60"
          alt="Modern real estate skyline representing investor funding opportunities"
          fill
          className="object-cover opacity-25"
          priority
        />
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-6xl mx-auto">
            <Badge variant="secondary" className="mb-6 text-lg px-6 py-3 bg-white/20 backdrop-blur-sm border-white/30">
              <Star className="w-5 h-5 mr-2" />
              EXCLUSIVE FUNDING PROGRAM
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
              CALLING ALL
              <br />
              <span className="text-yellow-300">REAL ESTATE</span>
              <br />
              INVESTORS
            </h1>
            
            <p className="text-xl md:text-3xl mb-8 font-semibold text-emerald-100 animate-fade-in-up delay-200">
              Premium Funding Solutions for Serious Investors
            </p>
            
            <div className="text-4xl md:text-6xl font-black mb-12 text-yellow-300 animate-fade-in-up delay-400">
              UP TO $500,000
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto animate-fade-in-up delay-600">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                <CheckCircle className="w-8 h-8 mx-auto mb-3 text-green-300" />
                <h3 className="font-bold text-lg mb-2">No Collateral Required</h3>
                <p className="text-sm text-emerald-100">Flexible terms designed for investors</p>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                <Users className="w-8 h-8 mx-auto mb-3 text-blue-300" />
                <h3 className="font-bold text-lg mb-2">All Credit Welcome</h3>
                <p className="text-sm text-emerald-100">We focus on your potential, not just your score</p>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                <Clock className="w-8 h-8 mx-auto mb-3 text-purple-300" />
                <h3 className="font-bold text-lg mb-2">Quick Approval</h3>
                <p className="text-sm text-emerald-100">Get funded in as little as 7 days</p>
              </div>
            </div>
            
            <div className="animate-fade-in-up delay-800">
              <Button 
                size="lg" 
                className="bg-white text-emerald-700 hover:bg-emerald-50 text-xl px-12 py-6 rounded-full font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Apply Now - Get Funded Fast
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Trusted by Thousands of Investors</h2>
            <p className="text-xl text-emerald-200">Join the elite community of successful real estate investors</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">$250M+</div>
              <div className="text-lg text-emerald-200">Total Funded</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">2,500+</div>
              <div className="text-lg text-emerald-200">Happy Investors</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">7 Days</div>
              <div className="text-lg text-emerald-200">Average Approval</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">95%</div>
              <div className="text-lg text-emerald-200">Approval Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Secure Your Funding in Minutes</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Complete our exclusive application to access up to $500,000 in real estate investment capital
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 border-b">
                <CardTitle className="text-2xl text-slate-900">Investor Funding Application</CardTitle>
                <CardDescription className="text-slate-600">
                  Fill out the form below to get started with your funding application
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-0">
                <div className="relative" style={{ height: '1525px' }}>
                  <iframe
                    src="https://api.rjbusinesssolutions.org/widget/form/OtowqG7F0TXY10ErYZc3"
                    style={{ width: '100%', height: '100%', border: 'none', borderRadius: '0 0 0.625rem 0.625rem' }}
                    id="inline-OtowqG7F0TXY10ErYZc3" 
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="INITIAL LEAD CAPTURE"
                    data-height="1525"
                    data-layout-iframe-id="inline-OtowqG7F0TXY10ErYZc3"
                    data-form-id="OtowqG7F0TXY10ErYZc3"
                    title="INITIAL LEAD CAPTURE"
                  >
                  </iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Success Stories from Real Investors</h2>
            <p className="text-xl text-slate-600">Join thousands of successful real estate investors</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="mb-4 relative w-full h-40">
                  <Image
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=60"
                    alt="Rental property financed through investor program"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-slate-700 mb-6 italic text-lg">
                  "Got approved for $150K in just 5 days with a 620 credit score. No banks would touch me, but this program made my first rental property possible!"
                </p>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center">
                    <span className="text-emerald-700 font-bold">MR</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Maria Rodriguez</h4>
                    <p className="text-sm text-slate-600">First-time investor, Dallas TX</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="mb-4 relative w-full h-40">
                  <Image
                    src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c54a?w=800&auto=format&fit=crop&q=60"
                    alt="Duplex investment financed with competitive terms"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-slate-700 mb-6 italic text-lg">
                  "Secured $300K for a duplex purchase with only 15% down. The terms were better than any bank could offer and closing was lightning fast."
                </p>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">JT</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">James Thompson</h4>
                    <p className="text-sm text-slate-600">Real estate investor, Phoenix AZ</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="mb-4 relative w-full h-40">
                  <Image
                    src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&auto=format&fit=crop&q=60"
                    alt="Portfolio expansion across multiple properties"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-slate-700 mb-6 italic text-lg">
                  "This funding allowed me to expand my portfolio from 2 to 5 properties in 6 months. The approval process was smooth and professional."
                </p>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold">SC</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Sarah Chen</h4>
                    <p className="text-sm text-slate-600">Portfolio investor, Miami FL</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-700 to-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">⏰ Limited Time Opportunity</h2>
          <p className="text-xl mb-8 text-emerald-100">This exclusive funding program closes soon!</p>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto mb-8">
            <div className="text-3xl font-bold mb-4 text-yellow-300">
              Applications close in:
            </div>
            
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-4xl font-bold text-yellow-300">{timeLeft.days}</div>
                <div className="text-sm text-emerald-100">DAYS</div>
              </div>
              
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-4xl font-bold text-yellow-300">{timeLeft.hours}</div>
                <div className="text-sm text-emerald-100">HOURS</div>
              </div>
              
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-4xl font-bold text-yellow-300">{timeLeft.minutes}</div>
                <div className="text-sm text-emerald-100">MINUTES</div>
              </div>
              
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-4xl font-bold text-yellow-300">{timeLeft.seconds}</div>
                <div className="text-sm text-emerald-100">SECONDS</div>
              </div>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-white text-emerald-700 hover:bg-emerald-50 text-xl px-12 py-6 rounded-full font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Secure Your Spot Now
            <ArrowRight className="w-6 h-6 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-yellow-400" />
                  <span>1-800-LDE-SOLV</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-yellow-400" />
                  <span>funding@ldesolutions.com</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#application" className="block text-yellow-400 hover:text-yellow-300 transition-colors">Apply Now</a>
                <a href="#" className="block text-yellow-400 hover:text-yellow-300 transition-colors">Terms & Conditions</a>
                <a href="#" className="block text-yellow-400 hover:text-yellow-300 transition-colors">Privacy Policy</a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Funding Programs</h3>
              <div className="space-y-2">
                <p className="text-emerald-200">Residential Investment</p>
                <p className="text-emerald-200">Commercial Properties</p>
                <p className="text-emerald-200">Fix & Flip Loans</p>
              </div>
            </div>
          </div>
          
          <Separator className="bg-emerald-700 mb-8" />
          
          <div className="text-center">
            <p className="text-emerald-200 mb-2">
              © 2024 LDE SOLUTIONS. Licensed lender. Equal Housing Opportunity.
            </p>
            <p className="text-sm text-emerald-300">
              Terms and rates based on amount and qualification. Subject to approval and verification.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}